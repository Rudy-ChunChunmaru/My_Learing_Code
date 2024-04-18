from rest_framework.authentication import TokenAuthentication as BaseTokeAuth


class TokenAuthentication(BaseTokeAuth):
    keyword='Bearer'