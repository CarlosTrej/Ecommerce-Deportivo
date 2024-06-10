from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet
from app1 import views

router = DefaultRouter()
router.register(r'productos', ProductoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('login/', views.login_view, name='login'),
    path('productos/', views.lista_productos, name='lista_productos'),
    path('eliminar-producto/<int:producto_id>/', views.eliminar_producto, name='eliminar_producto'),
    path('actualizar-producto/<int:producto_id>/', views.actualizar_producto, name='actualizar_producto'),
    path('subir-producto/', views.subir_producto, name='subir_producto'),
    
    

]
