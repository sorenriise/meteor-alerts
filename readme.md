# Meteor Alerts #

This is a clone to make it server side available

1. Add the `alert` template to your app
2. Trigger a success alert with `Alert.success('You created a post!')`

Remove alerts with 

`Alert.clear()`

###Full API###

```
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
```
