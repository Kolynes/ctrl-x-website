from django.http import HttpResponseNotFound, JsonResponse

def ensure_signed_in(func):
    """
        A decorator to ensure that a session is active before attempting any sensitive operation.
    """
    def decorated_func(request):
        if request.user.is_authenticated:
            return func(request)
        else:
            return JsonResponse({
                "status": False,
                "error": "Not signed in"
            })
    return decorated_func