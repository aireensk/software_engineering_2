
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from .email_utils import send_email

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()   # ✅ ADD THIS
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        post = serializer.save(author=self.request.user)
        send_email(self.request.user.email, "Post Created", f"Your post '{post.title}' was created.")

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()   # ✅ ADD THIS
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Comment.objects.filter(author=self.request.user)
        
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

@api_view(['POST'])
def register(request):
    user = User.objects.create_user(
        username=request.data.get("username"),
        password=request.data.get("password")
    )
    return Response({"message": "User created"})
