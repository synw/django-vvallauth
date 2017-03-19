{% load i18n %}
page("{% url 'account_login' %}", function(ctx, next) { app.loadChunk("{% url 'account_login' %}", "{% trans 'Login' %}") } );
page("{% url 'account_signup' %}", function(ctx, next) { app.loadChunk("{% url 'account_signup' %}", "{% trans 'Signup' %}") } );
page("{% url 'account_email_verification_sent' %}", function(ctx, next) { app.loadChunk("{% url 'account_email_verification_sent' %}", "{% trans 'Confirm email' %}") } );
page("{% url 'account_email' %}", function(ctx, next) { app.loadChunk("{% url 'account_email' %}", "{% trans 'Email' %}") } );
page("{% url 'account_inactive' %}", function(ctx, next) { app.loadChunk("{% url 'account_inactive' %}", "{% trans 'Inactive account' %}") } );
page("{% url 'account_logout' %}", function(ctx, next) { app.loadChunk("{% url 'account_logout' %}", "{% trans 'Logout' %}") } );
page("{% url 'account_change_password' %}", function(ctx, next) { app.loadChunk("{% url 'account_change_password' %}", "{% trans 'Change password' %}") } );
page("{% url 'account_reset_password' %}", function(ctx, next) { app.loadChunk("{% url 'account_reset_password' %}", "{% trans 'Reset password' %}") } );
page("{% url 'account_reset_password_done' %}", function(ctx, next) { app.loadChunk("{% url 'account_reset_password_done' %}", "{% trans 'Password reseted' %}") } );
page("{% url 'account_reset_password_from_key_done' %}", function(ctx, next) { app.loadChunk("{% url 'account_reset_password_from_key_done' %}", "{% trans 'Password reseted' %}") } );
page("{% url 'account_set_password' %}", function(ctx, next) { app.loadChunk("{% url 'account_set_password' %}", "{% trans 'Set password' %}") } );
page("{% url 'socialaccount_connections' %}", function(ctx, next) { app.loadChunk("{% url 'socialaccount_connections' %}", "{% trans 'Social accounts' %}") } );
page("{% url 'socialaccount_login_cancelled' %}", function(ctx, next) { app.loadChunk("{% url 'socialaccount_login_cancelled' %}", "{% trans 'Login canceled' %}") } );
page("{% url 'socialaccount_login_error' %}", function(ctx, next) { app.loadChunk("{% url 'socialaccount_login_error' %}", "{% trans 'Login error' %}") } );
page("{% url 'socialaccount_signup' %}", function(ctx, next) { app.loadChunk("{% url 'socialaccount_signup' %}", "{% trans 'Signup with social account' %}") } );