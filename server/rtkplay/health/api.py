from ninja import Router

router = Router()


@router.get("/ping")
def ping(request):
    return {"details": "pong"}
