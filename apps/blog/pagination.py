from rest_framework.pagination import PageNumberPagination
    
class SmallSetPagination(PageNumberPagination):
    # Parametro de la query http://localhost:8001/admin/p=1
    page_query_param = 'p'
    # Cuantos post por pagina
    page_size = 6
    # 
    page_size_query_param = 'page_size'
    max_page_size = 6
    
class MediumSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 9
    page_size_query_param = 'page_size'
    max_page_size = 9


class LargeSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 18
    page_size_query_param = 'page_size'
    max_page_size = 18