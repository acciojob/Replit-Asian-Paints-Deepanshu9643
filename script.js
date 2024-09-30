//your JS code here. If required.
document.querySelector("#change_button").addEventListener("click",function() {
	  const num = document.querySelector("#block_id").value
	const color = document.querySelector("#color_id").value

	const griditem =  document.querySelectorAll(".grid-item")
	griditem.forEach(item => {
		item.style.backgroundColor = "transparent"
	})

const block = document.getElementById(num)
	if(block){
		block.style.backgroundColor = color
	}else{
		alert("Please choose a Number")
	}
		})

	document.querySelector("#reset").addEventListener("click",function() {
		const griditem =  document.querySelectorAll("grid-item")
		 griditem.forEach(reset => {
			 reset.style.backgroundColor = "transparent"
		 })
		})
