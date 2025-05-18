CREATE DATABASE Partz_data;
use Partz_data;

CREATE TABLE `products` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `product_type_id` CHAR(7),
    `name` VARCHAR(255),
    `price` FLOAT,
    `manufacturer_name` VARCHAR(255),
    `rating` FLOAT,
    PRIMARY KEY(`id`)
);

CREATE TABLE `product_type_lookup` (
    `product_type_id` CHAR(7) NOT NULL UNIQUE,
    `product_type_name` VARCHAR(255),
    PRIMARY KEY(`product_type_id`)
);

CREATE TABLE `retailer_links` (
	`product_id` CHAR(7) NOT NULL,
	`amazon_link` VARCHAR(255),
	`primeabgb_link` VARCHAR(255),
	`manufacturer_link` VARCHAR(255),
	PRIMARY KEY(`product_id`)
);

CREATE TABLE `Builder` (
    `build_id` CHAR(7) NOT NULL UNIQUE,
    `Name` VARCHAR(255),
    `price` FLOAT,
    `cpu_id` CHAR(7),
    `memory_id` CHAR(7),
    `memory_amt` INT,
    `power_supply_id` CHAR(7),
    `motherboard_id` CHAR(7),
    `operating_system_id` CHAR(2),
    PRIMARY KEY(`build_id`)
);

CREATE INDEX `Builder_index_0`
ON `Builder` (`build_id`);



CREATE TABLE `CPU` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `base_clock` FLOAT,
    `boost_clock` FLOAT,
    `TDP` INT,
    `core_count` INT,
    `thread_count` INT,
    `cache` INT,
    `integrated_GPU` VARCHAR(255),
    `PCIE_GEN` FLOAT,
    `Socket` VARCHAR(255),
    PRIMARY KEY(`id`)
);

CREATE INDEX `CPU_index_0`
ON `CPU` (`id`);

CREATE TABLE `OS_lookups` (
    `id` CHAR(2) NOT NULL UNIQUE,
    `name` VARCHAR(255),
    `price` FLOAT,
    `manufacturer_name` VARCHAR(255),
    PRIMARY KEY(`id`)
);

CREATE TABLE `GPU` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`vram` INT,
	`base_clock` FLOAT,
	`boost_clock` FLOAT,
	`cuda_cores` INT,
	`rt_cores` INT,
	`TDP` INT,
	`PCIE_gen` DECIMAL,
	`Form_Factor` VARCHAR(255),
	`RT_enabled` BOOLEAN,
	`DLSS_version` DECIMAL,
	`FSR_version` DECIMAL,
	`vram_version` VARCHAR(7),
	PRIMARY KEY(`id`)
);

CREATE TABLE `motherboard` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `socket` VARCHAR(255),
    `chipset` VARCHAR(255),
    `form_factor` VARCHAR(255),
    PRIMARY KEY(`id`)
);

CREATE TABLE `PCI-e_lookup` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `motherboard_id` CHAR(7),
    `pcie_generation` FLOAT,
    `amount` INT,
    `Slot_type` INT,
    PRIMARY KEY(`id`)
);

CREATE TABLE `Memory_lookup` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `motherboard_id` CHAR(7),
    `amount` INT,
    `channel` INT,
    `max_amount` INT,
    `max_speed` INT,
    `ddr_generation` INT,
    PRIMARY KEY(`id`)
);

CREATE TABLE `storage_lookup` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `motherboard_id` CHAR(7),
    `storage_amount` INT,
    `storage_genertion` FLOAT,
    `type` VARCHAR(255),
    PRIMARY KEY(`id`)
);

CREATE TABLE `ports_lookup` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `motherboard_id` CHAR(7),
    `amount` INT,
    `type` VARCHAR(255),
    PRIMARY KEY(`id`)
);

CREATE TABLE `memory` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `generation` VARCHAR(5),
    `amount` INT,
    `size` VARCHAR(20),
    `speed` INT,
    PRIMARY KEY(`id`)
);

CREATE TABLE `power_supply` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `wattage` INT,
    `certification` VARCHAR(255),
    `fansize` VARCHAR(255),
    `modular` BOOLEAN,
    `form_factor` VARCHAR(255),
    PRIMARY KEY(`id`)
);

CREATE TABLE `storage` (
    `id` CHAR(7) NOT NULL UNIQUE,
    `interface` VARCHAR(255),
    `form_factor` VARCHAR(255),
    `capacity` VARCHAR(255),
    `RW_speeds` VARCHAR(255),
    `DRAM_cache` VARCHAR(255),
    `RPM` INT,
    PRIMARY KEY(`id`)
);

ALTER TABLE `products`
ADD FOREIGN KEY(`product_type_id`) REFERENCES `product_type_lookup`(`product_type_id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `retailer_links`
ADD FOREIGN KEY(`product_id`) REFERENCES `products`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`operating_system_id`) REFERENCES `OS_lookups`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`cpu_id`) REFERENCES `products`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`memory_id`) REFERENCES `products`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`power_supply_id`) REFERENCES `products`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`motherboard_id`) REFERENCES `products`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `PCI-e_lookup`
ADD FOREIGN KEY(`motherboard_id`) REFERENCES `motherboard`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Memory_lookup`
ADD FOREIGN KEY(`motherboard_id`) REFERENCES `motherboard`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `ports_lookup`
ADD FOREIGN KEY(`motherboard_id`) REFERENCES `motherboard`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `storage_lookup`
ADD FOREIGN KEY(`motherboard_id`) REFERENCES `motherboard`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;