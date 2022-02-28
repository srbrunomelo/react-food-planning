export function formatReal(value: number) {
  return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}