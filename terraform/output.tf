# output "website_url" {
#   value = "http://${aws_s3_bucket_website_configuration.site.website_endpoint}"
# }

# # Output the CloudFront distribution's domain name
# output "cloudfront_distribution_domain_name" {
#   value = "https://${aws_cloudfront_distribution.s3_distribution.domain_name}"
# }

output "custom_domain" {
  value = "terracloudrlm.com"
}

# output "cloudfront_distribution_id" {
#   value = aws_cloudfront_distribution.s3_distribution.id
#   description = "The ID of the CloudFront distribution."
# }