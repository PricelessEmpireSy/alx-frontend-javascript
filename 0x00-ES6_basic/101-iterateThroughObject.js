export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to store the names
  const names = [];
  // Loop through the iterator object
  for (const item of reportWithIterator) {
    // Push each name to the array
    names.push(item);
  }
  // Join the array elements with | and return the string
  return names.join(' | ');
}
