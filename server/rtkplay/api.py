from ninja import NinjaAPI

from rtkplay.health.api import router as health_router

api = NinjaAPI()

api.add_router("/health/", health_router)
