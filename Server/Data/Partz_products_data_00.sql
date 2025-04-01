INSERT INTO `product_type_lookup` (`product_type_id`, `product_type_name`) VALUES
('CPUS', 'CPU'),
('GPUS', 'GPU'),
('MBD', 'Motherboard'),
('MEM', 'Memory'),
('STRG', 'Storage'),
('PSU', 'Power Supply');


INSERT INTO `products` (`id`, `product_type_id`, `name`, `price`, `manufacturer_name`, `rating`) VALUES
('7X2a9Bq', 'CPUS', 'Intel Core i9-14900K', 599.99, 'Intel', 4.8),
('z8K3pD1', 'GPUS', 'NVIDIA GeForce RTX 4090', 1599.99, 'NVIDIA', 4.9),
('W5gL0rT', 'MBD', 'ASUS ROG Maximus Z790 Hero', 599.99, 'ASUS', 4.7),
('Q9vH6mE', 'MEM', 'Corsair Vengeance DDR5 32GB', 129.99, 'Corsair', 4.8),
('y4N1xP8', 'STRG', 'Samsung 990 Pro 2TB NVMe SSD', 179.99, 'Samsung', 4.9),
('R0c6U5j', 'PSU', 'Corsair RM1000x 1000W', 189.99, 'Corsair', 4.7),
('A1b2C3d', 'CPUS', 'AMD Ryzen 9 7950X3D', 649.99, 'AMD', 4.9),
('E4f5G6h', 'GPUS', 'AMD Radeon RX 7900 XTX', 999.99, 'AMD', 4.8),
('I7j8K9l', 'MBD', 'MSI MAG B650 Tomahawk WIFI', 219.99, 'MSI', 4.6),
('M0n1O2p', 'MEM', 'G.Skill Trident Z5 RGB 32GB', 139.99, 'G.Skill', 4.7),
('Q3r4S5t', 'STRG', 'Western Digital Black SN850X 2TB NVMe SSD', 189.99, 'Western Digital', 4.8),
('U6v7W8x', 'PSU', 'Seasonic FOCUS GX-850 850W', 149.99, 'Seasonic', 4.6),
('jK9lM0n', 'CPUS', 'AMD Ryzen 5 7600X', 249.99, 'AMD', 4.5),
('pQ3r4S5', 'GPUS', 'NVIDIA GeForce RTX 4070 Ti', 799.99, 'NVIDIA', 4.6),
('tU6v7W8', 'MBD', 'Gigabyte X670E AORUS Master', 499.99, 'Gigabyte', 4.8),
('xY2a9Bq', 'MEM', 'Crucial DDR5 32GB', 119.99, 'Crucial', 4.7),
('z8R3pD1', 'STRG', 'Crucial P3 Plus 2TB NVMe SSD', 149.99, 'Crucial', 4.7),
('W5gL0rE', 'PSU', 'EVGA SuperNOVA 850 GT 850W', 139.99, 'EVGA', 4.6),
('9Bq7X2a', 'CPUS', 'Intel Core i7-13700K', 409.99, 'Intel', 4.7),
('D1z8K3p', 'GPUS', 'AMD Radeon RX 6800 XT', 529.99, 'AMD', 4.5),
('T0rW5gL', 'MBD', 'ASRock Z790 Taichi', 479.99, 'ASRock', 4.9),
('E6mQ9vH', 'MEM', 'Teamgroup T-Force Delta RGB 32GB', 124.99, 'Teamgroup', 4.8),
('P8xY4N1', 'STRG', 'Kingston Fury Renegade 2TB NVMe SSD', 199.99, 'Kingston', 4.8),
('J5jR0c6', 'PSU', 'be quiet! Straight Power 11 850W', 169.99, 'be quiet!', 4.7),
('d3C2b1A', 'CPUS', 'AMD Ryzen 7 7700X', 339.99, 'AMD', 4.6),
('h6G5f4E', 'GPUS', 'NVIDIA GeForce RTX 3080', 699.99, 'NVIDIA', 4.6),
('l9K8j7I', 'MBD', 'ASUS ROG Strix B650E-E Gaming WiFi', 299.99, 'ASUS', 4.7),
('p2O1n0M', 'MEM', 'Patriot Viper Venom RGB 32GB', 114.99, 'Patriot', 4.6),
('t5S4r3Q', 'STRG', 'Seagate FireCuda 530 2TB NVMe SSD', 209.99, 'Seagate', 4.9),
('x8W7v6U', 'PSU', 'Cooler Master V850 Gold V2', 159.99, 'Cooler Master', 4.8),
('a9B8c7D', 'CPUS', 'Intel Core i5-13600K', 309.99, 'Intel', 4.6),
('e6F5g4H', 'GPUS', 'AMD Radeon RX 6700 XT', 399.99, 'AMD', 4.4),
('i3J2k1L', 'MBD', 'MSI MPG Z790 Edge WIFI', 349.99, 'MSI', 4.8),
('m0P9n8O', 'MEM', 'Corsair Dominator Platinum RGB 32GB', 149.99, 'Corsair', 4.9),
('q7R6s5T', 'STRG', 'WD Black SN770 2TB NVMe SSD', 169.99, 'Western Digital', 4.7),
('u4V3w2X', 'PSU', 'EVGA SuperNOVA 750 GT 750W', 129.99, 'EVGA', 4.5);



INSERT INTO `CPU` (`id`, `base_clock`, `boost_clock`, `TDP`, `core_count`, `thread_count`, `cache`, `integrated_GPU`, `PCIE_GEN`, `Socket`) VALUES
('7X2a9Bq', 3.2, 6.0, 125, 24, 32, 36, 'Intel UHD Graphics 770', 5.0, 'LGA 1700'),
('A1b2C3d', 4.2, 5.7, 120, 16, 32, 144, 'AMD Radeon Graphics', 5.0, 'AM5'),
('jK9lM0n', 4.7, 5.3, 105, 6, 12, 38, 'AMD Radeon Graphics', 5.0, 'AM5'),
('9Bq7X2a', 3.4, 5.4, 125, 20, 28, 34, 'Intel UHD Graphics 770', 5.0, 'LGA 1700'),
('d3C2b1A', 4.2, 5.0, 105, 8, 16, 32, 'AMD Radeon Graphics', 5.0, 'AM5'),
('a9B8c7D', 3.4, 5.1, 125, 14, 20, 24, 'Intel UHD Graphics 770', 5.0, 'LGA 1700');



INSERT INTO `GPU` (`id`, `VRAM`, `base_clock`, `boost_clock`, `cuda_cores`, `rt_cores`, `TDP`, `PCIE_gen`, `Form_Factor`, `RT_enabled`, `DLSS_version`, `FSR_version`) VALUES
('z8K3pD1', 24, 2.23, 2.52, 16384, 128, 450, 4.0, 'Triple Slot', TRUE, 3.0, NULL),
('E4f5G6h', 24, 1.9, 2.5, 6144, 96, 355, 4.0, 'Dual Slot', TRUE, NULL, 3.0),
('pQ3r4S5', 12, 2.31, 2.61, 7680, 60, 285, 4.0, 'Dual Slot', TRUE, 3.0, NULL),
('D1z8K3p', 16, 1.7, 2.3, 3840, 60, 300, 4.0, 'Dual Slot', TRUE, NULL, 2.0),
('h6G5f4E', 10, 1.4, 1.7, 8704, 68, 320, 4.0, 'Dual Slot', TRUE, 2.0, NULL),
('e6F5g4H', 12, 2.3, 2.6, 2560, 40, 230, 4.0, 'Dual Slot', TRUE, NULL, 2.0); 



INSERT INTO `memory` (`id`, `generation`, `amount`, `size`, `speed`) VALUES
('Q9vH6mE', 'DDR5', 32, '16GBx2', '6000MHz'),
('M0n1O2p', 'DDR5', 32, '16GBx2', '6000MHz'),
('xY2a9Bq', 'DDR5', 32, '16GBx2', '5600MHz'),
('E6mQ9vH', 'DDR5', 32, '16GBx2', '6400MHz'),
('p2O1n0M', 'DDR5', 32, '16GBx2', '6200MHz'),
('m0P9n8O', 'DDR5', 32, '16GBx2', '6800MHz');



INSERT INTO `power_supply` (`id`, `wattage`, `certification`, `fansize`, `modular`, `form_factor`) VALUES
('R0c6U5j', 1000, '80+ Gold', '135mm', TRUE, 'ATX'),
('U6v7W8x', 850, '80+ Gold', '120mm', TRUE, 'ATX'),
('W5gL0rE', 850, '80+ Gold', '135mm', TRUE, 'ATX'),
('J5jR0c6', 850, '80+ Gold', '135mm', TRUE, 'ATX'),
('x8W7v6U', 850, '80+ Gold', '120mm', TRUE, 'ATX'),
('u4V3w2X', 750, '80+ Gold', '120mm', TRUE, 'ATX');




INSERT INTO `storage` (`id`, `interface`, `form_factor`, `capacity`, `RW_speeds`, `DRAM_cache`, `RPM`) VALUES
('y4N1xP8', 'NVMe PCIe 4.0', 'M.2 2280', '2TB', '7450/6900 MB/s', 'Yes', NULL),
('Q3r4S5t', 'NVMe PCIe 4.0', 'M.2 2280', '2TB', '7300/6600 MB/s', 'Yes', NULL),
('z8R3pD1', 'NVMe PCIe 4.0', 'M.2 2280', '2TB', '7000/6500 MB/s', 'Yes', NULL),
('P8xY4N1', 'NVMe PCIe 4.0', 'M.2 2280', '2TB', '7300/7000 MB/s', 'Yes', NULL),
('t5S4r3Q', 'NVMe PCIe 4.0', 'M.2 2280', '2TB', '7300/6900 MB/s', 'Yes', NULL),
('q7R6s5T', 'NVMe PCIe 4.0', 'M.2 2280', '2TB', '5200/4900 MB/s', 'Yes', NULL);

