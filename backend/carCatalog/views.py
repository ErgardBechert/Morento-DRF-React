from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from .models import Car, CarComment
from .serializers import CarSerializer, CarCommentSerializer
from rest_framework import filters
from django.shortcuts import get_object_or_404

# Display Car

class CarList(generics.ListAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = CarSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['type', 'capacity', 'price']
    queryset = Car.objects.all()
    
class CarDetail(generics.RetrieveAPIView):
    serializer_class = CarSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Car, name=item)
    # def get_queryset(self):
    #     name = self.request.query_params.get('name', None)
    #     return Car.objects.filter(name=name)
    
# Seacrh Car

class CarListDetailfilter(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^name']

# Car Commet display

class CarCommentList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CarCommentSerializer
    queryset = CarComment.objects.all()

# Car Commet action

class CarCommentMixin:
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CarCommentSerializer
    queryset = CarComment.objects.all()

class CreateCar(CarCommentMixin, generics.CreateAPIView):
    pass

class EditCar(CarCommentMixin, generics.UpdateAPIView):
    pass

class DeleteCar(CarCommentMixin, generics.RetrieveDestroyAPIView):
    pass

# Admin Car

class CarMixin:
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CarSerializer
    queryset = Car.objects.all()

class CreateCar(CarMixin, generics.CreateAPIView):
    pass

class EditCar(CarMixin, generics.UpdateAPIView):
    pass

class DeleteCar(CarMixin, generics.RetrieveDestroyAPIView):
    pass

    # '^' Starts-with search.
    # '=' Exact matches.
    # '@' Full-text search. (Currently only supported Django's PostgreSQL backend.)
    # '$' Regex search.

# class CarList(viewsets.ModelViewSet):
#     # permission_classes = [IsAuthenticated]
#     serializer_class = CarSerializer
    
#     def get_object(self, queryset=None, **kwargs):
#         item = self.kwargs.get('pk')  # здесь получаем значение pk из параметров URL
#         return get_object_or_404(Car, name=item)  # ищем объект Car по полю name

#     def get_queryset(self):
#         return Car.objects.all()

# class CarList(viewsets.ViewSet):
#     permission_classes = [IsAuthenticated]
#     queryset = Car.objects.all()

#     def list(self, request):
#         serializer_class = CarSerializer(self.queryset, many=True)
#         return Response(serializer_class.data)

#     def retrieve(self, request, pk=None):
#         car = get_object_or_404(self.queryset, pk=pk)
#         serializer_class = CarSerializer(car)
#         return Response(serializer_class.data)
    

# class CarList(generics.ListCreateAPIView): #Вывод списка + создание 
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer
    

# class CarDetail(generics.RetrieveUpdateDestroyAPIView): #Просмотр, изменение, удаление - одного авто
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer