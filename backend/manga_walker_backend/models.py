from django.db import models


def upload_BookCoverImage_path(instance, filename):
    ext = filename.split('.')[-1]
    return '/'.join(['bookcover', str(instance.category.id)+str(instance.title)+str(".")+str(ext)])


class BookComponent(models.Model):

    title = models.CharField(max_length=100)
    cover_img = models.ImageField(blank=True, null=True, upload_to="cover")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class StoreBook(models.Model):

    title = models.CharField(max_length=100)
    category = models.ForeignKey(BookComponent, on_delete=models.PROTECT)
    url = models.URLField(max_length=200)
    stored_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
