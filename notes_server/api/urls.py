from api.views import NoteViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'notes', NoteViewSet, basename='notes')

urlpatterns = router.urls