from django.shortcuts import render
from .models import Post


# Create your views here.

def index(request):
    latest = Post.objects.order_by('-pub_date')[:10]
    print(latest[0].author)
    return render(request, "index.html", {"posts": latest})
