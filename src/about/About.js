import React from 'react';

class About extends React.Component{

	render(){
		return(
			<div className="container-sm mt-4 pb-3 rounded shadow bg-white">
				<br />
				<h3 className="text-center">Arter Tendean</h3>
				<hr />
				<p>Saya berasal dari Bumi dan saat ini sedang berkuliah pada salah satu perguruan tinggi swasta yang ada di provinsi saya yaitu Universitas Klabat.</p>

				<p>Website ini saya dibuat sebgai tugas akhir untuk mata kuliah yang saya ambil yaitu Frontend Web Development yang diajarkan oleh dosen saya sir <a href="http://fik.unklab.ac.id/web/Faculty/details/reymon-rotikan" target="_blank">Reymon Rotikan</a> </p>

				<p>Website ini dibuat dengan menggunakan Reactjs, dan semua data yang ditampilkan pada halaman awal diambil dari API <a href="https://www.themoviedb.org/" target="_blank">themoviedb</a>. themoviedb mewajibkan kita untuk menggunakan api key saat akan mengambil data, jadi kita harus mendaftar dan membuat aplikasinya terlebih dahulu sebelum bisa menggunakan layanan API mereka.</p>
			</div>
		)
	}
}


export default About;