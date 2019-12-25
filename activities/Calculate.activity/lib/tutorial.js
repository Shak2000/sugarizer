define([], function () {
	var tutorial = {};

	tutorial.start = function() {
		var steps = [
			{
				element: "",
				orphan: true,
				placement: "bottom",
				title: "Calculate Activity",
				content: "Welcome into the Calculate activity. The Calculate activity provides you with a scientific calculator"
			},
			{
				element: "#trigo-palette",
				placement: "bottom",
				title: "Trigonometry",
				content: "Trigonometry content"
			},
			{
				element: "#algebra-palette",
				placement: "bottom",
				title: "Algebra",
				content: "Algebra content"
			},
			{
				element: "#base-palette",
				placement: "bottom",
				title: "Base",
				content: "Base content"
			},
			{
				element: "#radian-degree-palette",
				placement: "bottom",
				title: "Radians or Degrees",
				content: "Radian and Degrees content"
			},
			{
				element: "#output-digits-palette",
				title: "Output Digits",
				content: "Output Digits content"
			}
		];
		var tour = new Tour({
				template: "\
				<div class='popover tour'>\
					<div class='arrow'></div>\
					<h3 class='popover-title tutorial-title'></h3>\
					<div class='popover-content'></div>\
					<div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\
						<div class='tutorial-prev-icon icon-button' data-role='prev'>\
							<div class='tutorial-prev-icon1 web-activity'>\
								<div class='tutorial-prev-icon2 web-activity-icon'></div>\
								<div class='tutorial-prev-icon3 web-activity-disable'></div>\
							</div>\
							<div class='icon-tutorial-text'>Prev</div>\
						</div>\
						<span data-role='separator' style='margin: 4px'>|</span>\
						<div class='tutorial-next-icon icon-button' data-role='next'>\
							<div class='tutorial-next-icon1 web-activity'>\
								<div class='tutorial-next-icon2 web-activity-icon'></div>\
								<div class='tutorial-next-icon3 web-activity-disable'></div>\
							</div>\
							<div class='icon-tutorial-text'>Next</div>\
						</div>\
						<div class='tutorial-end-icon icon-button' data-role='end'>\
							<div class='tutorial-end-icon1 web-activity'>\
								<div class='tutorial-end-icon2 web-activity-icon'></div>\
								<div class='tutorial-end-icon3 web-activity-disable'></div>\
							</div>\
							<div class='icon-tutorial-text'>End</div>\
						</div>\
					</div>\
				</div>",
				storage: false,
				backdrop: true,
				steps: steps
			});
		tour.init();
		tour.start(true);

	};

	return tutorial;
});