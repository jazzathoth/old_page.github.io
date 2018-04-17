function dropMenuFunc()
	{
	document.getElementById("dropMenuId").classList.toggle("show");
	}

window.onclick = function(e)
{
	if(!e.target.matches('.dropMenu'))
		{
		var dropMenuId = document.getElementById("dropMenuId");
		if(dropMenuId.classList.contains('show'))
			{
			dropMenuId.classList.remove('show');
			}
		}
}