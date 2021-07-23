from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('StoreBook', views.StoreBookViewSet)
router.register('BookComponent', views.BookComponentViewSet)
# router.register('ListBook', views.ListBook)

urlpatterns = [
    path('', include(router.urls)),
    path('listbook/', views.ListBook.as_view(), name="listbook")
]
