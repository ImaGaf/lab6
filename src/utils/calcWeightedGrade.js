/**
 * Calcula una nota final ponderada a partir de componentes con peso.
 * @param {Array<{score: number, weight: number}>} items - Arreglo de objetos con score (0-100) y weight (0-1)
 * @returns {number} Nota ponderada 0-100 con 2 decimales
 * @throws {TypeError} Si los tipos no son válidos
 * @throws {RangeError} Si los valores están fuera de rango o suma de pesos ≠ 1
 */
function calcWeightedGrade(items) {
  // Validar que items sea un arreglo
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }

  if (items.length === 0) {
    throw new RangeError('items array must not be empty');
  }

  let totalWeight = 0;
  let weightedSum = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Validar que item sea un objeto
    if (typeof item !== 'object' || item === null) {
      throw new TypeError(`item at index ${i} must be an object`);
    }

    // Validar que score exista y sea número
    if (typeof item.score !== 'number' || isNaN(item.score)) {
      throw new TypeError(`score at index ${i} must be a number`);
    }

    // Validar que weight exista y sea número
    if (typeof item.weight !== 'number' || isNaN(item.weight)) {
      throw new TypeError(`weight at index ${i} must be a number`);
    }

    // Validar rango de score (0-100)
    if (item.score < 0 || item.score > 100) {
      throw new RangeError(`score at index ${i} must be between 0 and 100`);
    }

    // Validar rango de weight (0-1)
    if (item.weight < 0 || item.weight > 1) {
      throw new RangeError(`weight at index ${i} must be between 0 and 1`);
    }

    totalWeight += item.weight;
    weightedSum += item.score * item.weight;
  }

  // Validar que la suma de pesos sea 1 con tolerancia ±0.001
  if (Math.abs(totalWeight - 1) > 0.001) {
    throw new RangeError(`sum of weights must be 1 (±0.001), got ${totalWeight}`);
  }

  // Devolver con 2 decimales
  return Math.round(weightedSum * 100) / 100;
}

module.exports = calcWeightedGrade;
