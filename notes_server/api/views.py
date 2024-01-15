from api.models import Note
from rest_framework import viewsets
from rest_framework.response import Response
from api.serializer import NoteSerializer


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

# class NoteViewSet(viewsets.ViewSet):
#     """
#     A simple ViewSet for listing or retrieving users.
#     """
#     def list(self, request):
#         queryset = Note.objects.all()
#         serializer = NoteSerializer(queryset, many=True)
#         print(serializer.data)
#         return Response(serializer.data)

#     def retrieve(self, request, pk=None):
#         queryset = Note.objects.all()
#         note = get_object_or_404(queryset, pk=pk)
#         serializer = NoteSerializer(note)
#         return Response(serializer.data)