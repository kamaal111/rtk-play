from rest_framework.views import exception_handler

def custom_exception_handler(exception: Exception | None, context):
    response = exception_handler(exception, context)
    return response