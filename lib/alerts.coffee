Alert = 
	set: (title,html,bsClass,dismiss)->
		Session.set 'Alert', {
			title: title
			html: html
			bsClass: 'alert-' + bsClass
			dismiss: dismiss
		}
	clear: ->
		Session.set 'Alert', null

	success: (html)->
		@set('',html,'success')

	error: (html)->
		@set('',html,'danger')

	info: (html)->
		@set('',html,'info')

	warning: (html)->
		@set('',html,'warning')