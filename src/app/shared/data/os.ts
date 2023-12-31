import { inArray } from "jquery";

 let os ={
    "os": [
        {
            "id": 124,
            "name": "Windows 2012 R2 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 159,
            "name": "Custom",
            "arch": "x64",
            "family": "iso"
        },
        {
            "id": 164,
            "name": "Snapshot",
            "arch": "x64",
            "family": "snapshot"
        },
        {
            "id": 167,
            "name": "CentOS 7 x64",
            "arch": "x64",
            "family": "centos"
        },
        {
            "id": 180,
            "name": "Backup",
            "arch": "x64",
            "family": "backup"
        },
        {
            "id": 186,
            "name": "Application",
            "arch": "x64",
            "family": "application"
        },
        {
            "id": 240,
            "name": "Windows 2016 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 270,
            "name": "Ubuntu 18.04 LTS x64",
            "arch": "x64",
            "family": "ubuntu"
        },
        {
            "id": 327,
            "name": "FreeBSD 12 x64",
            "arch": "x64",
            "family": "freebsd"
        },
        {
            "id": 352,
            "name": "Debian 10 x64 (buster)",
            "arch": "x64",
            "family": "debian"
        },
        {
            "id": 371,
            "name": "Windows 2019 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 381,
            "name": "CentOS 7 SELinux x64",
            "arch": "x64",
            "family": "centos"
        },
        {
            "id": 387,
            "name": "Ubuntu 20.04 LTS x64",
            "arch": "x64",
            "family": "ubuntu"
        },
        {
            "id": 391,
            "name": "Fedora CoreOS Stable",
            "arch": "x64",
            "family": "fedora-coreos"
        },
        {
            "id": 401,
            "name": "CentOS 8 Stream x64",
            "arch": "x64",
            "family": "centos"
        },
        {
            "id": 424,
            "name": "Fedora CoreOS Next",
            "arch": "x64",
            "family": "fedora-coreos"
        },
        {
            "id": 425,
            "name": "Fedora CoreOS Testing",
            "arch": "x64",
            "family": "fedora-coreos"
        },
        {
            "id": 447,
            "name": "FreeBSD 13 x64",
            "arch": "x64",
            "family": "freebsd"
        },
        {
            "id": 448,
            "name": "Rocky Linux x64",
            "arch": "x64",
            "family": "rockylinux"
        },
        {
            "id": 452,
            "name": "AlmaLinux x64",
            "arch": "x64",
            "family": "almalinux"
        },
        {
            "id": 462,
            "name": "VzLinux x64",
            "arch": "x64",
            "family": "vzlinux"
        },
        {
            "id": 477,
            "name": "Debian 11 x64 (bullseye)",
            "arch": "x64",
            "family": "debian"
        },
        {
            "id": 501,
            "name": "Windows 2022 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 516,
            "name": "Fedora 35 x64",
            "arch": "x64",
            "family": "fedora"
        },
        {
            "id": 521,
            "name": "Windows Core 2022 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 522,
            "name": "Windows Core 2016 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 523,
            "name": "Windows Core 2019 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 535,
            "name": "Arch Linux x64",
            "arch": "x64",
            "family": "archlinux"
        },
        {
            "id": 542,
            "name": "CentOS 9 Stream x64",
            "arch": "x64",
            "family": "centos"
        },
        {
            "id": 1743,
            "name": "Ubuntu 22.04 LTS x64",
            "arch": "x64",
            "family": "ubuntu"
        },
        {
            "id": 1744,
            "name": "Fedora 36 x64",
            "arch": "x64",
            "family": "fedora"
        },
        {
            "id": 1797,
            "name": "OpenBSD 7.1 x64",
            "arch": "x64",
            "family": "openbsd"
        },
        {
            "id": 1868,
            "name": "AlmaLinux 9 x64",
            "arch": "x64",
            "family": "almalinux"
        },
        {
            "id": 1869,
            "name": "Rocky Linux 9 x64",
            "arch": "x64",
            "family": "rockylinux"
        },
        {
            "id": 1870,
            "name": "VzLinux 9 x64",
            "arch": "x64",
            "family": "vzlinux"
        },
        {
            "id": 1929,
            "name": "Fedora 37 x64",
            "arch": "x64",
            "family": "fedora"
        },
        {
            "id": 1946,
            "name": "Ubuntu 22.10 x64",
            "arch": "x64",
            "family": "ubuntu"
        },
        {
            "id": 1968,
            "name": "OpenBSD 7.2 x64",
            "arch": "x64",
            "family": "openbsd"
        }
    ],
    "meta": {
        "total": 38,
        "links": {
            "next": "",
            "prev": ""
        }
    }
}
let filter=['windows','snapshot','application','backup','iso'];
os.os = os.os.filter(d=>!filter.includes(d.family) );
export {os};