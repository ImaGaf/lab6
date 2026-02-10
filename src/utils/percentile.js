/**
 * Calcula el percentil usando el método de rango más cercano (nearest-rank).
 * @param {number} p - Percentil a calcular (0-100)
 * @param {number[]} values - Arreglo de números
 * @returns {number} Valor del percentil con 2 decimales
 * @throws {TypeError} Si los tipos no son válidos
 * @throws {RangeError} Si los valores están fuera de rango
 */
function percentile(p, values) {
  // Validar que p sea número
  if (typeof p !== 'number' || isNaN(p)) {
    throw new TypeError('p must be a number');
  }

  // Validar rango de p (0-100)
  if (p < 0 || p > 100) {
    throw new RangeError('p must be between 0 and 100');
  }

  // Validar que values sea un arreglo
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }

  // Validar que values tenga al menos 1 elemento
  if (values.length === 0) {
    throw new RangeError('values array must have at least 1 element');
  }

  // Validar que todos los elementos sean números
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'number' || isNaN(values[i])) {
      throw new TypeError(`value at index ${i} must be a number`);
    }
  }

  // Ordenar ascendentemente
  const sorted = [...values].sort((a, b) => a - b);
  const N = sorted.length;

  // Regla explícita para bordes
  if (p === 0) {
    return Math.round(sorted[0] * 100) / 100;
  }
  
  if (p === 100) {
    return Math.round(sorted[N - 1] * 100) / 100;
  }

  // Método nearest-rank: rank = ceil(p/100 × N)
  // Indexación 1..N, por lo que restamos 1 para array de índice 0
  const rank = Math.ceil((p / 100) * N);
  const index = rank - 1; // Convertir de indexación 1..N a 0..N-1

  // Devolver con 2 decimales
  return Math.round(sorted[index] * 100) / 100;
}

module.exports = percentile;
