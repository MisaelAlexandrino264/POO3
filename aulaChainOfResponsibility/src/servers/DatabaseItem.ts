import PermissionType from "./PermissionType";

interface DatabaseItem{
    email: string;
    password: string;
    permission: PermissionType;
}

const Database : DatabaseItem[] = [
    {
        email: "misaelalexandrino@gmail.com",
        password: "abc123",
        permission: PermissionType.ADMIN
    },
    {
        email: "joao@gmail.com",
        password: "12345",
        permission: PermissionType.USER
    },
];

export default Database;