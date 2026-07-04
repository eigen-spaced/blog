// Shared constants and helpers for all RoPE visualization components

export const BASE = 10000;
export const D = 8;
export const HEAD_DIM = 64;
export const EXAMPLE_VEC = [0.80, 0.35, -0.50, 0.70, 0.25, -0.40, 0.60, -0.15];
export const PAIR_COLORS = ['#e8a33d', '#d98ab0', '#6cc0a0', '#6fa8d0'];
export const MOON_VEC: [number, number] = [0.60, 0.35];
export const ASTRO_VEC: [number, number] = [0.45, -0.55];

// Interleaved pairs for d=8: (d0,d1), (d2,d3), (d4,d5), (d6,d7)
export const PAIRS: [number, number][] = [];
for (let i = 0; i < D; i += 2) PAIRS.push([i, i + 1]);

export function thetaK(k: number): number {
  return 1 / Math.pow(BASE, (2 * k) / D);
}

export function thetaSmol(k: number): number {
  return 1 / Math.pow(BASE, (2 * k) / HEAD_DIM);
}

export function rotate2d(a: number, b: number, angle: number): [number, number] {
  const c = Math.cos(angle), s = Math.sin(angle);
  return [a * c - b * s, a * s + b * c];
}

export function dimToPair(i: number): number {
  return PAIRS.findIndex(([a, b]) => a === i || b === i);
}

// Generate a deterministic 64-dim vector for the displacement chart
export const VEC_64: number[] = [];
(function () {
  let seed = 42;
  for (let i = 0; i < 64; i++) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    VEC_64.push(((seed / 0x7fffffff) - 0.5) * 1.6);
  }
})();

// Button class helpers
export const ACTIVE_BTN = 'px-4 py-1.5 rounded-lg text-[0.95rem] font-semibold cursor-pointer transition-all duration-200 bg-amber-500/20 border border-amber-500/40 text-amber-200';
export const INACTIVE_BTN = 'px-4 py-1.5 rounded-lg text-[0.95rem] font-semibold cursor-pointer transition-all duration-200 bg-[#2a241d] border border-[#0e0c0a] text-[#8a7d66] hover:text-[#c8bda6]';

// Sentence token rendering helper
export function renderTokens(
  tokEl: HTMLElement,
  idxEl: HTMLElement,
  tokens: string[],
  aPos: number,
  mPos: number
) {
  tokEl.innerHTML = '';
  idxEl.innerHTML = '';
  tokens.forEach((t, i) => {
    const box = document.createElement('span');
    box.className = 'stok';
    if (i === aPos) box.classList.add('hl-a');
    if (i === mPos) box.classList.add('hl-m');
    box.textContent = t;
    tokEl.appendChild(box);

    const idx = document.createElement('span');
    idx.className = 'sidx';
    if (i === aPos) idx.classList.add('hl-a');
    if (i === mPos) idx.classList.add('hl-m');
    idx.textContent = String(i);
    idxEl.appendChild(idx);
  });
}
