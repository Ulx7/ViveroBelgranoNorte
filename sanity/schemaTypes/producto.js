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
          {title: 'Interior', value: 'Interior'},
          {title: 'Exterior', value: 'Exterior'},
          {title: 'Aromáticas', value: 'Aromáticas'},
          {title: 'Huerta', value: 'Huerta'},
          {title: 'Tierra', value: 'Tierra'},
          {title: 'Frutales', value: 'Frutales'}
        ]
      }
    },
    { name: 'imagen', type: 'image', title: 'Foto', options: { hotspot: true } }
  ]
}