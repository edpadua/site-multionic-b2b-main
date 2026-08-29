import sabonetes from './categorias/sabonetes.jpg';
import desengraxantes from './categorias/desengraxantes.jpg';
import cozinha from './categorias/cozinha.jpg';
import lavanderia from './categorias/lavanderia.jpg';
import limpezaGeral from './categorias/limpeza-geral.jpg';
import pisos from './categorias/pisos.jpg';
import especificos from './categorias/especificos.jpg';
import { generalImages } from './geral';

export const categoryImages = {
  sabonetes,
  desengraxantes,
  cozinha,
  lavanderia,
  limpezaGeral,
  pisos,
  especificos,
};

export const images = {
  categorias: categoryImages,
  gerais: generalImages,
};

export { generalImages };
export default images;
