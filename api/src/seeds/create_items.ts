import Knex from 'knex';

export async function seed(knex: Knex) {
 await  Knex('items').insert([
    {title: 'Bampadas', image: 'lampadas,svg'},
    {title: 'Pilias/Baterias', image: 'baterias,svg'},
    {title: 'Papeis/Papeloes', image: 'papeis-papelao,svg'},
    {title: 'Residuos Eletretonico', image: 'eletronicos,svg'},
    {title: 'Residuos Organicos', image: 'organicos,svg'},
    {title: 'Oleo de Cozinha', image: 'oleo,svg'},
  ])
}