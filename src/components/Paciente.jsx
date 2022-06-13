import React from 'react'

const Paciente = () => {
	return (
		<div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
			<p className='font-bold mb-3 uppercase text-gray-700'>Nombre: {' '}
				<span className='font-normal normal-case'>Hook</span>
			</p>
			<p className='font-bold mb-3 uppercase text-gray-700'>Propietario: {' '}
				<span className='font-normal normal-case'>Juan</span>
			</p>
			<p className='font-bold mb-3 uppercase text-gray-700'>Email: {' '}
				<span className='font-normal normal-case'>correo@correo.com</span>
			</p>
			<p className='font-bold mb-3 uppercase text-gray-700'>Fecha Alta: {' '}
				<span className='font-normal normal-case'>10 Diciembre 2022</span>
			</p>
			<p className='font-bold mb-3 uppercase text-gray-700'>Sintomas: {' '}
				<span className='font-normal normal-case'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptate, laboriosam hic omnis quae deserunt unde assumenda nam dignissimos, accusamus aperiam perferendis excepturi iusto totam. Repudiandae numquam placeat aliquid cupiditate!</span>
			</p>
		</div>
	)
}

export default Paciente