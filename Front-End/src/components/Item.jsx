import React from 'react' //digite rafce para criar essa estrutura

const Item = () => {
  return (
    <a href='/' className='flex flex-col gap-3'>
      <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-867206545888754748/original/355f2b83-8a2c-45ed-96d8-6fedf18ec3d7.jpeg?im_w=720" alt="" className='aspect-square object-cover rounded-2xl'/>

      <div>
          <h3 className='text-xl font-semibold'>Espaço inteiro: casa de hóspedes em Angra dos Reis, Brasil</h3>
          <p className='truncate text-gray-600'>
            Suíte luxuosa com uma bela vista panorâmica para o mar, varanda privativa,
            cama king-size, ar-condicionado, banheiro moderno e decoração sofisticada.
            Aproveite o nascer do sol, o som relaxante das ondas e uma experiência
            inesquecível em uma das regiões mais bonitas do litoral brasileiro.
          </p>
      </div>
          <p
          ><span className='font-semibold'>R$ 550</span> Por noite
          </p>
    </a>
  )
}

export default Item
