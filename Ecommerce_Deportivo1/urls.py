from django.contrib import admin
from django.urls import path, include
from app1.views import home, nosotros, contacto, ayuda, login_view, lista_productos, subir_producto

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app1.urls')),  # Incluye todas las rutas de app1 en la raíz
    path('', home, name='home'),
    path('nosotros/', nosotros, name='nosotros'),
    path('contacto/', contacto, name='contacto'),
    path('productos/', lista_productos, name='lista_productos'),
    path('ayuda/', ayuda, name='ayuda'),
    path('login/', login_view, name='login'),
    path('subir-producto/', subir_producto, name='subir_producto'),
    
    
   
]

