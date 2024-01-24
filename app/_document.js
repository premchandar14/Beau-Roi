class MyDocument extends  Document{
	render(){
		return(
			<Html lang="en">
				<Head>
					<link 
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/maaterialize.min.css"
					/>

				</Head>

				<body>
					<Main/>
					<NextScript />
					    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> 
					<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0./js/materialize.min.js"></script>
					<script>
  $(document).ready(function(){
    $('.carousel').carousel({
			padding: 200
	});
	autoplay();
	function autoplay() {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 4500);
	}
  });
</script>
				</body>
			</Html>
			);
	}
}