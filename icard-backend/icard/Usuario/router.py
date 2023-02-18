from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import UsuarioModelViewSet, UsuarioView

router_user = DefaultRouter()
router_user.register(
    prefix = 'Usuarios',
    basename = 'Usuarios',
    viewset = UsuarioModelViewSet
)

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/me', UsuarioView.as_view())
]