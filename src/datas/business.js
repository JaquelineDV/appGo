
// Estrutura de empresa 

// Ao cadastrar o negócio, pega os dados do usuário logado e adiciona como membro e owner 

export const situationsMember = [
  {
    id : 0,
    name : 'Inativo',
  }, 
  {
    id : 1,
    name : 'Ativo'
  },
  {
    id : 2,
    name : 'Pendente'
  },
  {
    id : 3,
    name : 'Rejeitado'
  }
]


export const situationsCompany = [
  {
    id : 0,
    name : 'Inativo',
  }, 
  {
    id : 1,
    name : 'Ativo'
  },
  {
    id : 2,
    name : 'Bloqueada'
  },
]

export const listBusines = [
  {
    id : 'uid',
    name : '',
    descrição : '',
    area : {
      id : '',
      name  :  'Nome da area',
    },
    members : [
      {
        id : '', // id do usuário 
        name : '', 
        creator : true, 
        owner : true, // proprietario do negocio
        permissions : []
      },
      {
        id : '', // id do usuário 
        name : '', 
        situation : 1,
        creator : true, 
        owner : true, // proprietario do negocio
        permissions : []
      },
    ]
  }  

]