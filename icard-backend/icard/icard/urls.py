"""icard URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from Usuario.router import router_user
from Categorias.router import router_categoria
from Productos.router import router_product
from Mesas.router import router_mesa
from Pedidos.router import router_pedidos

schema_view = get_schema_view(
    openapi.Info(
        title='icard',
        default_version='v1',
        description='Carta digital para restaurantes'
    ),
    public=True
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redocs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/user', include(router_user.urls)),
    path('api/', include('Usuario.router')),
    path('api/', include(router_categoria.urls)),
    path('api/', include(router_product.urls)),
    path('api/', include(router_mesa.urls)),
    path('api/', include(router_pedidos.urls))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)