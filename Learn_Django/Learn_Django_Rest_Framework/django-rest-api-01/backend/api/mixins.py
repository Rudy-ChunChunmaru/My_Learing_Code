from rest_framework import permissions

from .permissions import IsStaffEditorPremission

class StaffEditorPermissionsMixin():
    permissions_classes = [permissions.IsAdminUser,IsStaffEditorPremission]