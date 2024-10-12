resource "aws_s3_bucket" "bucket" {
  bucket        = "porfolio1site200"
  force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "site" {
  bucket = aws_s3_bucket.bucket.id

  index_document {
    suffix = "index7latest.html"
  }

  /*error_document {
    key = "error.html"
  }*/
}

resource "aws_s3_bucket_public_access_block" "public_access_block" {
  bucket = aws_s3_bucket.bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

locals {
  content_types = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "text/javascript",
    ".mp4" : "video/mp4",
    ".png" : "image/png",
    ".webm" : "video/webm"
  }
}

resource "aws_s3_object" "file" {
  for_each     = fileset("${path.module}/../website", "**/*.{html,css,js,mp4,png,webm}")
  bucket       = aws_s3_bucket.bucket.id
  key          = replace(each.value, "${path.module}/../website/", "")
  source       = "${path.module}/../website/${each.value}"  # Ensure correct absolute path for the source file
  content_type = lookup(local.content_types, regex("\\.[^.]+$", each.value), null)
  etag         = filemd5("${path.module}/../website/${each.value}")  # Make sure filemd5 uses absolute path
  tags         = var.common_tags
}


resource "aws_s3_object" "upload_images_png" {
  for_each     = fileset("${path.module}/../website", "*.png")
  bucket       = aws_s3_bucket.bucket.id
  key          = each.value
  source       = "${path.module}/../website/${each.value}"
  etag         = filemd5("${path.module}/../website/${each.value}")
  content_type = "image/png"
}

resource "aws_s3_object" "upload_images_jpeg" {
  for_each     = fileset("${path.module}/../website", "*.jpg")
  bucket       = aws_s3_bucket.bucket.id
  key          = each.value
  source       = "${path.module}/../website/${each.value}"
  etag         = filemd5("${path.module}/../website/${each.value}")
  content_type = "image/jpeg"
}

resource "aws_s3_object" "upload_html" {
  for_each     = fileset("${path.module}/../website", "*.html")
  bucket       = aws_s3_bucket.bucket.id
  key          = each.value
  source       = "${path.module}/../website/${each.value}"
  etag         = filemd5("${path.module}/../website/${each.value}")
  content_type = "text/html"
}

resource "aws_s3_object" "upload_audio" {
  for_each     = fileset("${path.module}/../website", "*.mp3")
  bucket       = aws_s3_bucket.bucket.id
  key          = each.value
  source       = "${path.module}/../website/${each.value}"
  etag         = filemd5("${path.module}/../website/${each.value}")
  content_type = "audio/mpeg"
}
