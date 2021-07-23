from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('items', views.StoreBookViewSet)
router.register('books', views.BookComponentViewSet)
# router.register('ListBook', views.ListBook)

urlpatterns = [
    path('', include(router.urls)),
    path('listbook/', views.ListBook.as_view(), name="listbook")
]
