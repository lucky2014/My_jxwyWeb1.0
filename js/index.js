var index = {
	fullpage : function(){
		$('#dowebok').fullpage({
			sectionsColor: ['#f2f2f2', '#fff', '#fff', '#fff'],
			anchors: ['page1', 'page2', 'page3', 'page4'],
			menu: '#menu'
		});
	}
}
$(function(){
	index.fullpage();
	$(".sectionCon").height($(window).height());
})