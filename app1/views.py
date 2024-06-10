from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer
from django.shortcuts import get_object_or_404, redirect, render
from .forms import ProductoForm
from django.contrib.auth import authenticate, login
from django.contrib import messages
def home(request):
    productos = Producto.objects.all()
    return render(request, 'index.html', {'productos': productos})

def nosotros(request):
    return render(request, 'nosotros.html')

def productos(request):
    return render(request, 'productos.html')

def contacto(request):
    return render(request, 'contacto.html')

def ayuda(request):
    return render(request, 'ayuda.html')

def login_view(request):
    return render(request, 'login.html')

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

def lista_productos(request):
    productos = Producto.objects.all()
    return render(request, 'productos.html', {'productos': productos})

def eliminar_producto(request, producto_id):
    producto = get_object_or_404(Producto, pk=producto_id)
    producto.delete()
    return redirect('lista_productos')

def actualizar_producto(request, producto_id):
    producto = get_object_or_404(Producto, pk=producto_id)
    if request.method == 'POST':
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            form.save()
            return redirect('lista_productos')
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'actualizarProducto.html', {'form': form, 'producto': producto})

def subir_producto(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_productos')
    else:
        form = ProductoForm()
    return render(request, 'crearProducto.html', {'form': form})







