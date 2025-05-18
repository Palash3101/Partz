-- Motherboard Table
INSERT INTO `motherboard` (`id`, `socket`, `chipset`, `form_factor`) VALUES
('W5gL0rT', 'LGA 1700', 'Z790', 'ATX'),
('I7j8K9l', 'AM5', 'B650', 'ATX'),
('tU6v7W8', 'AM5', 'X670E', 'ATX'),
('T0rW5gL', 'LGA 1700', 'Z790', 'ATX'),
('l9K8j7I', 'AM5', 'B650E', 'ATX'),
('i3J2k1L', 'LGA 1700', 'Z790', 'ATX');

-- PCI-e_lookup Table
INSERT INTO `PCI-e_lookup` (`id`, `motherboard_id`, `generation`, `amount`, `Slot_type`) VALUES
('pci123', 'W5gL0rT', 5.0, 1, 16),
('pci124', 'W5gL0rT', 4.0, 1, 16),
('pci125', 'W5gL0rT', 3.0, 3, 1),
('pci345', 'I7j8K9l', 4.0, 1, 16),
('pci346', 'I7j8K9l', 3.0, 2, 1),
('pci678', 'tU6v7W8', 5.0, 2, 16),
('pci679', 'tU6v7W8', 4.0, 1, 1),
('pci901', 'T0rW5gL', 5.0, 1, 16),
('pci902', 'T0rW5gL', 4.0, 2, 16),
('pci234', 'l9K8j7I', 5.0, 1, 16),
('pci235', 'l9K8j7I', 4.0, 1, 16),
('pci567', 'i3J2k1L', 5.0, 1, 16),
('pci568', 'i3J2k1L', 4.0, 2, 16);

-- Memory_lookup Table
INSERT INTO `Memory_lookup` (`id`, `motherboard_id`, `amount`, `channel`, `max_amount`, `max_speed`, `ddr_generation`) VALUES
('mem456', 'W5gL0rT', 4, 2, 128, 7200, 5),
('mem678', 'I7j8K9l', 4, 2, 128, 6400, 5),
('mem901', 'tU6v7W8', 4, 2, 192, 8000, 5),
('mem234', 'T0rW5gL', 4, 2, 128, 7600, 5),
('mem567', 'l9K8j7I', 4, 2, 128, 6800, 5),
('mem890', 'i3J2k1L', 4, 2, 192, 7800, 5);

-- storage_lookup Table
INSERT INTO `storage_lookup` (`id`, `motherboard_id`, `amount`, `genertion`, `Type`) VALUES
('str789', 'W5gL0rT', 5, 4.0, 'M.2'),
('str790', 'W5gL0rT', 6, 3.0, 'SATA'),
('strabc', 'I7j8K9l', 2, 4.0, 'M.2'),
('strabd', 'I7j8K9l', 4, 3.0, 'SATA'),
('strdef', 'tU6v7W8', 4, 5.0, 'M.2'),
('streff', 'tU6v7W8', 8, 3.0, 'SATA'),
('strhij', 'T0rW5gL', 4, 4.0, 'M.2'),
('strhjk', 'T0rW5gL', 6, 3.0, 'SATA'),
('strklm', 'l9K8j7I', 3, 5.0, 'M.2'),
('strkln', 'l9K8j7I', 4, 3.0, 'SATA'),
('strnop', 'i3J2k1L', 5, 4.0, 'M.2'),
('strnoq', 'i3J2k1L', 8, 3.0, 'SATA');

-- ports_lookup Table
INSERT INTO `ports_lookup` (`id`, `motherboard_id`, `amount`, `type`) VALUES
('por012', 'W5gL0rT', 2, 'USB 3.2 Gen 2x2'),
('por013', 'W5gL0rT', 8, 'USB 3.2 Gen 2'),
('por014', 'W5gL0rT', 6, 'USB 3.2 Gen 1'),
('por345', 'I7j8K9l', 6, 'USB 3.2 Gen 2'),
('por346', 'I7j8K9l', 4, 'USB 3.2 Gen 1'),
('por678', 'tU6v7W8', 2, 'USB4'),
('por679', 'tU6v7W8', 4, 'USB 3.2 Gen 2'),
('por901', 'T0rW5gL', 1, 'USB 3.2 Gen 2x2'),
('por902', 'T0rW5gL', 6, 'USB 3.2 Gen 2'),
('por903', 'T0rW5gL', 4, 'USB 3.2 Gen 1'),
('por234', 'l9K8j7I', 2, 'USB 3.2 Gen 2x2'),
('por235', 'l9K8j7I', 6, 'USB 3.2 Gen 2'),
('por567', 'i3J2k1L', 2, 'USB4'),
('por568', 'i3J2k1L', 6, 'USB 3.2 Gen 2');