from .views import CarList, CarListDetailfilter, CreateCar, EditCar, DeleteCar, CarDetail, CarCommentList, CreateCarComment, EditCarComment, DeleteCarComment, CarComment
#from rest_framework.routers import DefaultRouter
from django.urls import path

urlpatterns = [
    # Car URLs
    path('filter/', CarList.as_view(), name='detailcreate'),
    path('search/', CarListDetailfilter.as_view(), name='carsearch'),
    path('cars/', CarList.as_view(), name='listcreate'),
    path('cars/<str:pk>/', CarDetail.as_view(), name='detailpost'),
    # Car Comment URLs
    path('comments/<str:pk>/', CarCommentList.as_view(), name='comments'),
    path('comment/create/', CreateCarComment.as_view(), name='create-comment'),
    path('comment/edit/<int:pk>/', EditCarComment.as_view(), name='edit-comment'),
    path('comment/delete/<int:pk>/', DeleteCarComment.as_view(), name='delete-comment'),
    # Car Admin URLs
    path('admin/create/', CreateCar.as_view(), name='createpost'),
    # path('admin/edit/postdetail/<int:pk>/', AdminPostDetail.as_view(), name='admindetailpost'),
    path('admin/edit/<int:pk>/', EditCar.as_view(), name='editpost'),
    path('admin/delete/<int:pk>/', DeleteCar.as_view(), name='deletepost'),
]




# from .views import CarList
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register('', CarList, basename='car')
# urlpatterns = router.urls