class HeaderUploader < CarrierWave::Uploader::Base

  include CarrierWave::MiniMagick

  storage :file
  # storage :fog

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def default_url
    ActionController::Base.helpers.asset_path("fallback/header_default.jpg")
  end

  version :header do
    process :resize_to_fill => [1060, 330]
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

end
