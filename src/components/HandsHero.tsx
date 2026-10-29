import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const CELL_W = 9;
const CELL_H = 13;

interface Props { progress: number } // 0..1 across the sticky hero scroll

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function HandsHero({ progress }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progRef = useRef(progress);
  progRef.current = progress;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let cols = 0, rows = 0;
    let mask = new Float32Array(0);   // hands density per cell (source grid, wider than screen for shifting)
    let glyph = new Float32Array(0);  // "W" density per cell
    let seeds = new Float32Array(0);
    let letters: string[] = [];
    let last = 0;

    const build = (img: HTMLImageElement) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL_W); rows = Math.ceil(h / CELL_H);

      // hands mask: the source frame is scaled to full width, placed on the lower 60% of the grid
      const handRows = Math.round(Math.min(rows * 0.62, (cols * (img.height / img.width)) * (CELL_W / CELL_H)));
      const off = document.createElement("canvas");
      off.width = cols; off.height = handRows;
      const o = off.getContext("2d")!;
      o.imageSmoothingEnabled = true; o.imageSmoothingQuality = "high";
      o.drawImage(img, 0, 0, cols, handRows);
      const d = o.getImageData(0, 0, cols, handRows).data;
      mask = new Float32Array(cols * rows);
      for (let r = 0; r < handRows; r++) for (let c = 0; c < cols; c++) {
        mask[r * cols + c] = clamp((d[(r * cols + c) * 4] / 255) * 9);
      }

      // "W" glyph, centred
      const g = document.createElement("canvas");
      g.width = cols; g.height = rows;
      const gc = g.getContext("2d")!;
      gc.fillStyle = "#fff"; gc.textAlign = "center"; gc.textBaseline = "middle";
      const size = Math.min(rows * 0.5, cols * 0.3);
      gc.font = `700 ${size}px Georgia, serif`;
      gc.fillText("W", cols / 2, rows * 0.45);
      const gd = gc.getImageData(0, 0, cols, rows).data;
      glyph = new Float32Array(cols * rows);
      for (let i = 0; i < cols * rows; i++) glyph[i] = gd[i * 4 + 3] / 255;

      seeds = new Float32Array(cols * rows).map(() => Math.random());
      letters = Array.from({ length: cols * rows }, () => CHARS[(Math.random() * CHARS.length) | 0]);
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!cols) return;
      const p = progRef.current;
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      if (t - last > 90) { // flicker a share of the characters
        last = t;
        for (let i = 0; i < letters.length; i += 7) letters[(i + ((t / 90) | 0)) % letters.length] = CHARS[(Math.random() * CHARS.length) | 0];
      }

      const rise = ease(clamp(p / 0.35));               // hands rise into view
      const split = ease(clamp((p - 0.3) / 0.55));      // hands move far apart
      const lift = Math.round((1 - rise) * rows * 0.55);
      const shift = Math.round(split * cols * 0.62);
      const half = cols / 2;
      const showW = ease(clamp((p - 0.45) / 0.35));

      ctx.font = `500 ${CELL_H - 2}px "JetBrains Mono", monospace`;
      ctx.textBaseline = "top";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          let a = 0;
          // left hand moves left, right hand moves right
          const srcC = c < half ? c + shift : c - shift;
          const srcR = r - lift;
          const inSide = c < half ? srcC < half : srcC >= half;
          if (inSide && srcC >= 0 && srcC < cols && srcR >= 0 && srcR < rows) {
            a = mask[srcR * cols + srcC] * (0.35 + 0.65 * seeds[i]);
          }
          if (a > 0.05) {
            ctx.fillStyle = `rgba(${70 + (seeds[i] * 90) | 0},${70 + (seeds[i] * 60) | 0},255,${clamp(a)})`;
            ctx.fillText(letters[i], c * CELL_W, r * CELL_H);
          }
          const gw = glyph[i] * showW;
          if (gw > 0.2) {
            ctx.fillStyle = `rgba(255,255,255,${clamp(gw * (0.55 + 0.45 * seeds[i]))})`;
            ctx.fillText(letters[(i * 3) % letters.length], c * CELL_W, r * CELL_H);
          }
        }
      }
    };

    const img = new Image();
    img.src = "/hands-mask.png";
    const start = () => { build(img); };
    img.onload = start;
    const onResize = () => { if (img.complete) start(); };
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />;
}
