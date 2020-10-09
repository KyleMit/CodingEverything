# Demystifying Azure Networking

[Meetup Event](https://www.meetup.com/bostonazure/events/271399927/)**Vaibhav Gujral** [@vabgujral](https://twitter.com/vabgujral)

![About Vaibhav Gujral](/assets/notes/azure-networking/vaibhav.png)

## Azure Regions

* **Data Centers** - building or group of buildings to house physical infrastructure
* **Regions**
* **Geographies**
* **Availability Zones**

## Global Availability

[Azure regions](https://azure.microsoft.com/en-us/global-infrastructure/regions/)

![Global Regions](/assets/notes/azure-networking/global-regions.png)

## Azure Services

![Azure Services](/assets/notes/azure-networking/azure-services.png)

## Azure Virtual Network

### RFC 1918 IP Address spaces

* `10.0.0.0` - `10.255.255.255`
* `172.16.0.` - `192.168.255.255`
* `192.168.0.0` - `192.168.255.255`

You define the IP address ranges for your virtual network using Classless Inter-Domain Routing (**CIDR**) notation

* `192.168.100.14/24`
  * 256 IP addresses (2^32-n)
  * 192.168.100.0 - 192.168.100.255

You can have up to 65536 private IP addresses per virtual network

## Azure Virtual Network

![Azure Virtual Network](/assets/notes/azure-networking/virtual-network.png)

### Best Practices

[Plan Virtual Networks](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-vnet-plan-design-arm)

* Avoid non-overlapping address spaces
* ensure subnets don't cover the entire address space of the VNet.  Reserve some address space for the future
* Better to have fewer large VNets than multiple small VNets to avoid management issues
* Secure your VNets with Network Security Groups (**NSG**s)

## VPN Gateway

![VPN Gateway](/assets/notes/azure-networking/vpn-gateway.png)

## VNET Peering

![VNET Peering](/assets/notes/azure-networking/vnet-peering.png)

## Hub and Spoke Topology

![Hub-spoke network topology in Azure](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke)

![Hub and Spoke Topology](/assets/notes/azure-networking/hub-and-spoke-topology.png)

