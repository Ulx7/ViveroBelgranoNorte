export default {
  name: 'producto',
  type: 'document',
  title: 'Mis Plantas',
  fields: [
    { name: 'nombre', type: 'string', title: 'Nombre' },
    { name: 'descripcion', type: 'string', title: 'Descripción' },
    {
      name: 'categoria',
      type: 'string',
      title: 'Categoría',
      options: {
        list: [
          { title: 'Interior', value: 'Interior' },
          { title: 'Exterior', value: 'Exterior' },
          { title: 'Aromáticas', value: 'Aromáticas' },
          { title: 'Huerta', value: 'Huerta' },
          { title: 'Tierra', value: 'Tierra' },
          { title: 'Frutales', value: 'Frutales' }
        ]
      }
    },
    {
      name: 'sol',
      title: 'Requerimiento de Sol',
      type: 'string',
      options: {
        list: [
          { title: 'Sol directo', value: 'sol_directo' },
          { title: 'Sin sol directo', value: 'sombra' },
          { title: 'Media sombra', value: 'media_sombra' },
          { title: 'Luz indirecta', value: 'luz_indirecta' }
        ],
      },
    },
    {
      name: 'riego',
      title: 'Frecuencia de Riego',
      type: 'string',
      options: {
        list: [
          { title: 'Poco', value: 'bajo' },
          { title: 'Medio', value: 'medio' },
          { title: 'Alto', value: 'alto' }
        ],
      },
    },
    {
      name: 'ubicacion',
      title: 'Ubicación',
      type: 'string',
      options: {
        list: [
          { title: 'Interior', value: 'interior' },
          { title: 'Exterior', value: 'exterior' },
          { title: 'Mixta', value: 'mixta' }
        ],
      },
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'number',
      validation: Rule => Rule.min(0)
    },
    { name: 'imagen', type: 'image', title: 'Foto', options: { hotspot: true } }
  ]
}